import { createSlice } from "@reduxjs/toolkit";
import employees from "../../services/EmployeeService";
const initialState = {
    employees: employees
}
const employeeSlice = createSlice({
    name: 'employees',
    initialState: initialState,
    reducers: {
        updateSelected: function (state, action) {
             state.employees = state.employees.map(employee=>{
                 if (employee.id===action.payload) {
                     return {
                         ...employee,selected:!employee.selected
                     }
                 }else return employee;
             })
        }
    }
})

export const { updateSelected } = employeeSlice.actions;
export default employeeSlice.reducer;