import asketch2sketch from '@brainly/html-sketchapp/asketch2sketch/asketch2sketch';

export default function run(context) {
  const asketchFile = JSON.parse(context.json);
  asketch2sketch(context, [asketchFile]);
}
