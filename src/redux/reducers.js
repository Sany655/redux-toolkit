import counterReducer from './features/counter.feature'
import rmployeeReducer from './features/employees.feature'
import usersReducers from './features/users.feature';

const reduceres = {
    counter: counterReducer,
    employees: rmployeeReducer,
    users: usersReducers,
}

export default reduceres;