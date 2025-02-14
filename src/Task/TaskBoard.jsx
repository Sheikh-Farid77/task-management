import { useState } from "react";
import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";
import AddTaskModal from "./AddTaskModal";

const TaskBoard = () => {
  const defaultTask = {
    id: crypto.randomUUID,
    title: "Learn React",
    description:
      "I want to learn React in such way that i can treat it like my slave and make it do whatever i want to do",
    tags: ["web", "React", "js"],
    priority: "high",
    isFavorite: true,
  };

  const [tasks, setTasks] = useState([defaultTask]);
  const [showAddModal, setShowAddModal] = useState(false);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
    setShowAddModal(false);
  };
  return (
    <section className="mb-20" id="tasks">
      {showAddModal && <AddTaskModal onSave={handleAddTask}></AddTaskModal>}
      <div className="container mx-auto">
        {/* <!-- Search Box --> */}
        <div className="p-2 flex justify-end">
          <SearchTask></SearchTask>
        </div>
        {/* Search Box Ends  */}
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskAction onAddClick={() => setShowAddModal(true)}></TaskAction>
          <TaskList tasks={tasks}></TaskList>
        </div>
      </div>
    </section>
  );
};

export default TaskBoard;
