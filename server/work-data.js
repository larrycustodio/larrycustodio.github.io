module.exports = {
    data : {
        year: new Date().getFullYear().toString(),
        workHighlights: [
            {
                title: 'WooCRM',
                imgsource:'assets/img/woocrm-screen-1.png',
                status: 'wip',
                description: 'Prototyping the Content Management System for WooCommerce, '+
                'My contributions to this project include: the WooCommerce API authentication feature on the backend, ' +
                'and client-side rendering with React + Redux'
            },
            {
                title: 'Grub To Eat',
                imgsource:'assets/img/grubtoeat.jpg',
                status: 'deployed',
                link: 'https://grubtoeat.herokuapp.com',
                github: 'https://github.com/larrycustodio/grub-to-eat/',
                description: 'Part of a collaboration project, our team was tasked '+ 
                'to create a concept online ordering app. I was tasked on designing '+
                'the backend API endpoints, user login authentication and persistence, '+            
                'and the order checkout UI/UX.'
            },
            {
                title: 'Budgeter',
                imgsource:'assets/img/budgetplanner.jpg',
                status: 'deployed',
                link: 'https://lc-budgeting-app.herokuapp.com/',
                github: 'https://github.com/larrycustodio/redux-budget-tracker/',
                description: 'Budgetr is an ongoing project that I started '+ 
                'in order to learn state management with React and Redux. '+
                'In addition, I\'ve also dabbled with using Recharts.js ' +
                'to add visual insights.'
            },
            {
                title: 'Recipe Finder',
                imgsource:'assets/img/recipefinder.png',
                link: 'https://lc-recipefinder.herokuapp.com/#/',
                status: 'wip',
                github: 'https://github.com/larrycustodio/recipe-finder',
                description: 'I created a recipe list website to flex my chops on ' +
                'dispatching asynchronous/promise-based actions with Redux, ' +
                'view routing using React Router, and designing clean, modern components with Sass.'
            }
        ]
    }
} 