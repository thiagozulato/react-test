const routes = [
            {
                key: 'initialpage',
                path: "/",
                description: "Home Page",
                exact: true,
                component: './Pages/InitialPage'
            },
            {
                key: 'pageone',
                path: "/pageone",
                description: "Page 1 sample",
                exact: true,
                component: './Pages/Page1'
            },
            {
                key: 'testecomponentes',
                path: "/test",
                description: "Test Components",
                exact: true,
                component: './Pages/Teste'
            },
            {
                key: 'profile',
                path: "/profile",
                description: "Profile",
                exact: false,
                component: './Pages/Profile',
                routes:[
                    {
                        path: "/profile",
                        redirect: "/profile/detail"
                    },
                    {
                        key: 'profile.detail',
                        path: "/profile/detail",
                        description: "Profile Detail",
                        exact: true,
                        component: './Pages/Profile/Detail'
                    },
                    {
                        key: 'profile.accounts',
                        path: "/profile/accounts",
                        description: "Profile Account",
                        exact: true,
                        component: './Pages/Profile/Account'
                    }
                ]
            },
            {
                component: './Pages/NotFound'
            }
]

export default routes;