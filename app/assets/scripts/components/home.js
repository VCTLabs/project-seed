var React = require('react');

var Home = React.createClass({

  getInitialState: function () {
    return {};
  },

  componentDidMount: function () {
    console.log('I\'m here!');
  },

  render: function () {
    return (
      <div className='header'>
        <p>In the beginning the Universe was created.</p>
        <p>This has made a lot of people very angry and been widely regarded as a bad move.</p>
      </div>
    );
  }
});

module.exports = Home;
