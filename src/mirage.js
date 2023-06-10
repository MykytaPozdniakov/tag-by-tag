import { createServer, Model, RestSerializer, hasMany, belongsTo } from 'miragejs';

export function makeServer({ environment = 'development' } = {}) {
  let server = createServer({
    environment,

    models: {
      user: Model,
      userRole: Model,
      project: Model.extend({
        labels: hasMany(),
        tasks: hasMany()
      }),
      label: Model.extend({
        project: belongsTo(),
      }),
      task: Model.extend({
        project: belongsTo(),
        taskElements: hasMany(),
      }),
      taskElement: Model.extend({
        task: belongsTo(),
      }),
    },

    serializers: {
      application: RestSerializer,
    },

    routes() {
      this.namespace = 'api';

      this.resource('users');
      this.resource('userRoles');
      this.resource('projects');
      this.resource('labels');
      this.resource('tasks');
      this.resource('taskElements');

      this.get('/projects/:id', (schema, request) => {
        const projectId = request.params.id;
        return schema.projects.find(projectId);
      });      

      this.post('/projects', (schema, request) => {
        const newProject = JSON.parse(request.requestBody);
        return schema.projects.create(newProject);
      });
      
      this.patch('/projects/:id', (schema, request) => {
        const updatedProject = JSON.parse(request.requestBody);
        const projectId = request.params.id;
        let project = schema.projects.find(projectId);
        return project.update(updatedProject);
      });

      this.delete('/projects/:id', (schema, request) => {
        const projectId = request.params.id;
        return schema.projects.find(projectId).destroy();
      });
      
      // Дополнительные маршруты для работы с вложенными ресурсами
      this.get('/projects/:id/labels', (schema, request) => {
        const projectId = request.params.id;
        return schema.labels.where({ projectId });
      });

      this.get('/projects/:id/tasks', (schema, request) => {
        const projectId = request.params.id;
        return schema.tasks.where({ projectId });
      });

      this.get('/tasks/:id/taskElements', (schema, request) => {
        const datasetId = request.params.id;
        return schema.tasks.where({ datasetId });
      });
    },
  });

  server.createList('project', 15, {
    name: (i) => `Project ${i + 1}`,
    description: 'Sample project description',
  });


  return server;
}
