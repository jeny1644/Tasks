import { useNavigate } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Pagination,
} from "@mui/material";
import Button from "@mui/joy/Button";

function App() {
  const [students, setStudents] = useState([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const url = `http://localhost:3000/users`;

  const calculateAverageAndStatus = (student) => {
    const { sub1, sub2, sub3 } = student;
    const avg = (parseFloat(sub1) + parseFloat(sub2) + parseFloat(sub3)) / 3;
    const status = avg >= 33 ? "PASS" : "FAIL";

    return {
      ...student,
      avg: avg.toFixed(2), // Format the average to 2 decimal places
      status: status,
    };
  };

  const fetchedUsers = async () => {
    const response = await fetch(`${url}?_limit=5&_start=${(page - 1) * 5}`);
    const data = await response.json();
    const updatedData = data.map(calculateAverageAndStatus);

    setStudents(updatedData);
  };

  useEffect(() => {
    fetchedUsers();
  }, [page]);

  // Delete button handler
  const deleteStudent = async (id) => {
    try {
      const response = await fetch(`${url}/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        fetchedUsers();
      } else {
        console.error("Failed to delete user:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="main">
      <div className="head-cnt">
        <h1 className="heading">USER-LIST</h1>
        <Button
          onClick={() => {
            navigate("/userform");
          }}
        >
          CREATE
        </Button>
      </div>
      <div className="body-cnt">
        <TableContainer>
          <Table
            style={{
              border: "3px solid black",
              borderRadius: "5px",
              marginTop: "5px",
            }}
          >
            <TableHead style={{ backgroundColor: "#0B6BCb" }}>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Maths</TableCell>
                <TableCell>Physics</TableCell>
                <TableCell>Chemistry</TableCell>
                <TableCell>Average</TableCell>
                <TableCell>Status</TableCell>
                <TableCell colSpan={2}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {students.map((student) => (
                <TableRow key={student.id}>
                  <TableCell>{student.id}</TableCell>
                  <TableCell>{student.name}</TableCell>
                  <TableCell>{student.email}</TableCell>
                  <TableCell>{student.mobile}</TableCell>
                  <TableCell>{student.sub1}</TableCell>
                  <TableCell>{student.sub2}</TableCell>
                  <TableCell>{student.sub3}</TableCell>
                  <TableCell>{student.avg}</TableCell>
                  <TableCell
                    className={
                      student.status === "PASS" ? "status-pass" : "status-fail"
                    }
                  >
                    {student.status}
                  </TableCell>

                  <TableCell>
                    <Button>
                      Edit
                    </Button>
                    <Button
                      color="danger"
                      onClick={() => deleteStudent(student.id)}
                      style={{ marginLeft: "4px" }}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <Pagination
        style={{ marginTop: "10px", display: "flex", justifyContent: "center" }}
        count={10}
        page={page}
        onChange={(e, value) => setPage(value)}
      />
    </div>
  );
}

export default App;
