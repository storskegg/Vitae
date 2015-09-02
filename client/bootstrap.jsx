Meteor.startup(() => {
  "use strict";

  console.group('client/bootstrap.jsx');

  console.debug('Rendering <Vitae /> to #root');
  React.render(<Vitae />, document.getElementById('root'));

  console.groupEnd('client/bootstrap.es6');
})
