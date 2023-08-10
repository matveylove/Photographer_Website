import { createSlice } from "@reduxjs/toolkit";

const headerSlice = createSlice({
    name: 'header',
    initialState: {
        linkArray: [
            {
                title: 'ГЛАВНАЯ',
                path: '/',
            },
            {
                title: 'ОБО МНЕ',
                path: '/about',
            },
            {
                title: 'ПОРТФОЛИО',
                path: '/portfolio',
            },
            {
                title: 'ПРАЙС',
                path: '/price',
            },
            {
                title: 'ОТЗЫВЫ',
                path: '/feedback',
            },
            {
                title: 'КОНТАКТЫ',
                path: '/contact',
            },
        ],
        activeLink: 0
    },
    reducers: {
        setActiveLink: (state, action) => {
            state.activeLink = action.payload;
        }
    }
});

export const { setActiveLink } = headerSlice.actions;
export default headerSlice.reducer;
