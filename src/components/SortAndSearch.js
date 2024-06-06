import React, { useState } from 'react';

const SortAndSearch = ({ tasks, setFilteredTasks }) => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [sortType, setSortType] = useState('');

  const handleSearch = (e) => {
    const keyword = e.target.value.toLowerCase();
    setSearchKeyword(keyword);
    filterTasks(keyword, sortType);
  };

  const handleSort = (e) => {
    const type = e.target.value;
    setSortType(type);
    filterTasks(searchKeyword, type);
  };

  const filterTasks = (keyword, type) => {
    let filteredTasks = tasks.filter(task =>
      task.name.toLowerCase().includes(keyword) || task.dueDate.includes(keyword)
    );

    if (type === 'dueDate') {
      filteredTasks = filteredTasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    } else if (type === 'completed') {
      filteredTasks = filteredTasks.sort((a, b) => a.completed - b.completed);
    }

    setFilteredTasks(filteredTasks);
  };

  return (
    <div className="flex flex-col mb-4">
      <input
        type="text"
        placeholder="Search..."
        className="p-2 mb-2 border rounded"
        value={searchKeyword}
        onChange={handleSearch}
      />
      <select className="p-2 border rounded" onChange={handleSort}>
        <option value="">Sort By...</option>
        <option value="dueDate">Due Date</option>
        <option value="completed">Completion Status</option>
      </select>
    </div>
  );
};

export default SortAndSearch;
