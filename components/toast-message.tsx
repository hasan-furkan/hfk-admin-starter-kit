export const successToastMessage = (toast: Function, message: string) => {
    let toastId: string;

    toastId = toast({
      title: "Success",
      description: message,
      className: "bg-green-500 text-white",
      duration: 1500,
    });
   
  };
  
  export const errorToastMessage = (toast: Function, message: string) => {
    toast({
      variant: "destructive",
      title: "Error",
      description: message,
      duration: 1500,
    });
  };
  
  export const infoToastMessage = (toast: Function, message: string) => {
    toast({
      title: "Info",
      description: message,
      className: "bg-blue-500 text-white",
      duration: 1500,
    });
  };
  