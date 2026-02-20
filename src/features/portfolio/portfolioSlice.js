import { createSlice } from '@reduxjs/toolkit';
import { seedProjects } from '../../data/seedProjects';

const initialState = {
  projects: seedProjects,
  activeCategory: 'All'
};

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    setActiveCategory(state, action) {
      state.activeCategory = action.payload;
    },
    addProject(state, action) {
      state.projects.unshift({
        id: `p${Date.now()}`,
        ...action.payload
      });
    },
    removeProject(state, action) {
      state.projects = state.projects.filter((project) => project.id !== action.payload);
    }
  }
});

export const { setActiveCategory, addProject, removeProject } = portfolioSlice.actions;
export default portfolioSlice.reducer;