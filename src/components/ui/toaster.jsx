import * as Toast from "@radix-ui/react-toast";

export const Toaster = ({ children }) => (
  <Toast.Provider>
    {children}
    <Toast.Viewport className="fixed bottom-0 right-0 p-4" />
  </Toast.Provider>
);
