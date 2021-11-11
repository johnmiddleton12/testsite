import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";

import CryptoBox from "./components/CryptoBox";

import ThreeBox from "./components/ThreeBox";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei"

const App = () => {

    const [walletAddress, setWallet] = useState("");

    const [showAdd, setShowAdd] = useState(false);
    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: "Task 1",
            description: "Description 1",
            done: false,
        },
        {
            id: 2,
            title: "Task 2",
            description: "Description 2",
            done: true,
        },
        {
            id: 3,
            title: "Task 3",
            description: "Description 3",
            done: false,
        },
    ]);

    const addTask = (task) => {
        const id = tasks[tasks.length - 1].id + 1;
        setTasks([...tasks, { ...task, id }]);
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    // create a function that toggles the done property of a task
    const toggleTask = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, done: !task.done } : task
            )
        );
    };

    const showTasks = false;

    return (
      <Router>
        <div className="container">
            <Header 
            showAdd={showAdd}
            setShow={() => setShowAdd(!showAdd)}
            addEnabled={showTasks}
            />

        <Routes>

            <Route path="/"
            element=
              {showTasks  &&             <>
            {showAdd && <AddTask onAdd={addTask} />}

            {tasks.length > 0 ? (
                <Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    onToggle={toggleTask}
                />
            ) : (
                <h1>No tasks</h1>
            )}

            </> } 
            />

            <Route path='/about' element={<About />} />

        </Routes>

            <div
            style={{
              display: "flex",
              justifyContent: "center", 
            }}
            >
            <Canvas
            style={{
              width: "90%",
            }}
            >
              <ambientLight />
              <pointLight position={[0, 9, 0]} />
              <pointLight position={[2, 0, 4]} />
              <ThreeBox 
                position={[-1.2, 0, 0]}
                walletAddress={walletAddress}
              />
              <OrbitControls/>
            </Canvas>

            </div>

            <CryptoBox
              walletAddress={walletAddress}
              setWallet={setWallet}
            />

            <Footer />
        </div>
      </Router>
    );
};

export default App;
