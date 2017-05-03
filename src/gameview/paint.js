export default `<html style='height: 100%'>
  <body style='height: 95%'>
    <div id="sketch" style='height: 100%'>
      <canvas id="canvas" style='border: 1px grey; width: 100%; height: 100%'></canvas>
    </div>

    <script>
        (function(){
            try{
                let canvas = document.getElementById("canvas"),
                    height = canvas.height,
                    width = canvas.width,
                    stepX = height/20,
                    stepY = width/20,
                    positionX = width/2,
                    positionY = height,
                    context = canvas.getContext("2d"),
                    cleare = function () {
                        context.clearRect(0, 0, width, height);
                    },
                    position = function (x=positionX,y=(positionY-stepY)) {

                         context.beginPath();
                         context.arc(x,y,stepX, 0, 2*Math.PI, false);
                         context.fillStyle = 'red';
                         context.fill();
                         context.lineWidth = 1;
                         context.strokeStyle = 'red';
                         context.stroke();

                        positionX=x;
                        positionY=y;
                    },
                    stepLeft = function () {
                        cleare();
                        position(positionX-stepX,positionY);
                    },
                    stepRight = function () {
                        cleare();
                        position(positionX+stepX,positionY);
                    },
                    stepTop = function () {
                        cleare();
                        position(positionX,positionY-stepY);
                    },
                    stepBottom = function () {
                        cleare();
                        position(positionX,positionY+stepY);
                    },
                    action = function () {
                        cleare();
                        position(width/2,height-stepY);
                    };

                position();

                document.addEventListener("message", function(event) {
                    let json = JSON.parse(event.data);
                    switch (json.action) {
                        case 'action':
                            return action();
                        case 'left':
                            return stepLeft();
                        case 'right':
                            return stepRight();
                        case 'top':
                            return stepTop();
                        case 'down':
                            return stepBottom();
                    }
                }, false);

            } catch (e) {
                alert(e);
            }
        })()
    </script>
  </body>
</html>`;