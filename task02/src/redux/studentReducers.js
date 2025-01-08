import {
  ADD_STUDENT,
  ADD_STUDENT_SUCCESS,
  ADD_STUDENT_FAILURE,
  UPDATE_STUDENT,
  UPDATE_STUDENT_SUCCESS,
  UPDATE_STUDENT_FAILURE,
} from "./studentActions";

const initialState = {
  students: [],
  loading: false,
  error: null,
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_STUDENT:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ADD_STUDENT_SUCCESS:
      return {
        ...state,
        loading: false,
        students: [...state.students, action.payload],
      };
    case ADD_STUDENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case UPDATE_STUDENT:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case UPDATE_STUDENT_SUCCESS:
      const updatedStudents = state.students.map((student) =>
        student.id === action.payload.id ? action.payload : student
      );
      return {
        ...state,
        loading: false,
        students: updatedStudents,
        error: null,
      };
    case UPDATE_STUDENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default studentReducer;
