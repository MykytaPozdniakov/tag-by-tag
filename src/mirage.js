import { createServer, Model, RestSerializer, hasMany, belongsTo } from 'miragejs';

export function makeServer({ environment = 'development' } = {}) {
  let server = createServer({
    environment,

    models: {
      user: Model,
      userRole: Model,
      project: Model.extend({
        labels: hasMany(),
        datasets: hasMany(),
      }),
      label: Model.extend({
        project: belongsTo(),
      }),
      dataset: Model.extend({
        project: belongsTo(),
        datasetElements: hasMany(),
      }),
      datasetElement: Model.extend({
        dataset: belongsTo(),
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
      this.resource('datasets');
      this.resource('datasetElements');

      // Дополнительные маршруты для работы с вложенными ресурсами
      this.get('/projects/:id/labels', (schema, request) => {
        const projectId = request.params.id;
        return schema.labels.where({ projectId });
      });

      this.get('/projects/:id/datasets', (schema, request) => {
        const projectId = request.params.id;
        return schema.datasets.where({ projectId });
      });

      this.get('/datasets/:id/datasetElements', (schema, request) => {
        const datasetId = request.params.id;
        return schema.datasetElements.where({ datasetId });
      });
    },
  });

  server.createList('project', 15, {
    name: (i) => `Project ${i + 1}`,
    description: 'Sample project description',
  });


  return server;
}
