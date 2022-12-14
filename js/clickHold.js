const clickHold = (htmlNode, cb, holdSpeed = 100) => {
   let interval;

   const mouseDownCb = (e) => {
      interval = setInterval(() => {
         cb({ ...e, mouseDownCb });
      }, holdSpeed);
   };

   const mouseUpCb = () => {
      clearInterval(interval);
   };

   htmlNode.addEventListener("click", cb);

   htmlNode.addEventListener("mousedown", mouseDownCb);

   htmlNode.addEventListener("touchstart", mouseDownCb);

   htmlNode.addEventListener("mouseup", mouseUpCb);

   htmlNode.addEventListener("touchend", mouseUpCb);

   window.addEventListener("touchend", mouseUpCb);
   window.addEventListener("click", mouseUpCb);
};

export default clickHold;
