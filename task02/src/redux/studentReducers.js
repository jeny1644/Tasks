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
    case UPDATE_STUDENT:
      return { ...state, loading: true };
    
    case ADD_STUDENT_SUCCESS:
      return {
        ...state,
        loading: false,
        students: [...state.students, action.payload],
      };
    
    case UPDATE_STUDENT_SUCCESS:
      return {
        ...state,
        loading: false,
        students: state.students.map((student) =>
          student.id === action.payload.id ? action.payload : student
        ),
      };
    
    case ADD_STUDENT_FAILURE:
    case UPDATE_STUDENT_FAILURE:
      return { ...state, loading: false, error: action.payload };
    
    default:
      return state;
  }
};

export default studentReducer;
