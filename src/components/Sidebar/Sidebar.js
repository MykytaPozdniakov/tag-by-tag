// Sidebar.js

import React from 'react';
import './Sidebar.css'; // Импортируйте ваш файл стилей

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
        {/* Замените ссылки на свои маршруты */}
        <li><a href="/item1">Пункт меню 1</a></li>
        <li><a href="/item2">Пункт меню 2</a></li>
        <li><a href="/item3">Пункт меню 3</a></li>
        <li><a href="/item4">Пункт меню 4</a></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
