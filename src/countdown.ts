export function setupCountdown(wrapper: HTMLElement | null, endTime: number) {
  const tick = (): void => {
    const currTime = new Date().getTime();
    const diff = Math.ceil((endTime - currTime) / 1000);
    if (wrapper && diff >= 0) {
      wrapper.innerHTML = "";
      addElement(wrapper, Math.floor(diff / 86400));
      addElement(wrapper, Math.floor((diff % 86400) / 3600));
      addElement(wrapper, Math.floor((diff % 3600) / 60));
      addElement(wrapper, Math.floor(diff % 60));
      setTimeout(() => tick(), 1000);
    }
  };
  tick();
}

function addElement(wrapper: HTMLElement, num: number): void {
  const span = document.createElement("span");
  span.innerText = num.toString().padStart(2, "0") || "00";
  wrapper.append(span);
}
