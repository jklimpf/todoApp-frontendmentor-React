const Circle = function (props) {
  return (
    <svg id={props.id} height="30" width="40">
      <circle
        id={props.id}
        cx={props.x}
        cy={props.y}
        r={props.r}
        stroke={props.color}
        strokeWidth={props.width}
        fill={props.fill}
      />
    </svg>
  );
};

export default Circle;
