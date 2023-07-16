document.getElementById("blocks").onmousemove = e => {
    for(const block of document.getElementsByClassName("block")) {
      const rect = block.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
  
      block.style.setProperty("--mouse-x", `${x}px`);
      block.style.setProperty("--mouse-y", `${y}px`);
    };
}