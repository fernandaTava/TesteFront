import TestLayout from "@/pages/Layout/TestLayout.vue";

import Test from "@/pages/Test.vue";

const routes = [
  {
    path: "/",
    component: TestLayout,
    redirect: "/test",
    children: [
      {
        path: "test",
        name: "Test",
        component: Test
      }
    ]
  }
];

export default routes;
