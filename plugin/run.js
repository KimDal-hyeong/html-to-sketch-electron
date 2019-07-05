import asketch2sketch from '@brainly/html-sketchapp/asketch2sketch/asketch2sketch';

export default function run(context) {
  const url = NSURL.URLWithString('file://' + context.jsonPath.replace(' ', '%20'));
  const data = NSData.dataWithContentsOfURL(url);
  const content = NSString.alloc().initWithData_encoding_(data, NSUTF8StringEncoding);
  asketch2sketch(context, [JSON.parse(content)]);
}
