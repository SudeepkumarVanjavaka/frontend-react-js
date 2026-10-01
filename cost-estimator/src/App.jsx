import { Component } from "react";
import "./App.css";

const roles = {
  frontend: {
    name: "Frontend Developer",
    rate: 800
  },
  backend: {
    name: "Backend Developer",
    rate: 900
  },
  tester: {
    name: "Tester",
    rate: 600
  }
};

function createEmptyTask() {
  return {
    id: crypto.randomUUID(),
    name: "",
    roleId: "frontend",
    hours: ""
  };
}

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      tasks: []
    };

    this.addTask = this.addTask.bind(this);
    this.handleTaskChange = this.handleTaskChange.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  addTask() {
    this.setState(prevState => ({
      tasks: [
        ...prevState.tasks,
        createEmptyTask()
      ]
    }));
  }

  handleTaskChange(id, field, value) {
    this.setState(prevState => ({
      tasks: prevState.tasks.map(task =>
        task.id === id
          ? { ...task, [field]: value }
          : task
      )
    }));
  }

  deleteTask(id) {
    this.setState(prevState => ({
      tasks: prevState.tasks.filter(
        task => task.id !== id
      )
    }));
  }

  getTaskCost(task) {
    const role = roles[task.roleId];
    const hours = Number(task.hours) || 0;

    return hours * role.rate;
  }

  render() {

    const { tasks } = this.state;

    const totalHours = tasks.reduce(
      (total, task) =>
        total + (Number(task.hours) || 0),
      0
    );

    const totalCost = tasks.reduce(
      (total, task) =>
        total + this.getTaskCost(task),
      0
    );

    return (
      <div className="app">

        <h1>Project Cost Estimation</h1>

        <div className="top-section">

          <h2>Task Estimation</h2>

          <button onClick={this.addTask}>
            Add Task
          </button>

        </div>

        {tasks.length === 0 ? (

          <div className="empty">
            <p>No tasks added yet.</p>
          </div>

        ) : (

          <>

            <table>

              <thead>
                <tr>
                  <th>Task Name</th>
                  <th>Role</th>
                  <th>Hours</th>
                  <th>Cost</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>

                {tasks.map(task => (

                  <tr key={task.id}>

                    <td>
                      <input
                        type="text"
                        placeholder="Enter task name"
                        value={task.name}
                        onChange={e =>
                          this.handleTaskChange(
                            task.id,
                            "name",
                            e.target.value
                          )
                        }
                      />
                    </td>

                    <td>
                      <select
                        value={task.roleId}
                        onChange={e =>
                          this.handleTaskChange(
                            task.id,
                            "roleId",
                            e.target.value
                          )
                        }
                      >

                        {Object.entries(roles).map(
                          ([id, role]) => (

                            <option
                              key={id}
                              value={id}
                            >
                              {role.name}
                            </option>

                          )
                        )}

                      </select>
                    </td>

                    <td>
                      <input
                        type="number"
                        placeholder="Hours"
                        value={task.hours}
                        onChange={e =>
                          this.handleTaskChange(
                            task.id,
                            "hours",
                            e.target.value
                          )
                        }
                      />
                    </td>

                    <td>
                      {Number(task.hours) > 0
                        ? `Rs ${this.getTaskCost(task)}`
                        : "-"
                      }
                    </td>

                    <td>
                      <button
                        className="delete-button"
                        onClick={() =>
                          this.deleteTask(task.id)
                        }
                      >
                        Delete
                      </button>
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

            <div className="summary">

              <div>
                <span>Total Tasks</span>
                <strong>{tasks.length}</strong>
              </div>

              <div>
                <span>Total Hours</span>
                <strong>{totalHours}</strong>
              </div>

              <div>
                <span>Total Cost</span>
                <strong>
                  Rs {totalCost}
                </strong>
              </div>

            </div>

          </>

        )}

      </div>
    );
  }
}

export default App;