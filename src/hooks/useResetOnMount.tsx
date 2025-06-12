export function useResetOnMount(route?: string) {
  const resetPointerEvents = () => {
    if (route) {
      console.log(
        `Resetting pointer events to 'auto' after exit for route: ${route}`
      );
    } else {
      console.log("Resetting pointer events to 'auto' after exit");
    }
    document.body.style.pointerEvents = "auto";
  };
  return resetPointerEvents;
}
