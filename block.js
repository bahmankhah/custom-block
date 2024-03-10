wp.blocks.registerBlockType("custom/custom-block", {
  title: "Company Contact Infomration",
  icon: "hammer",
  category: "design",
  attributes: {
    icon: {
      type: "file",
      default: "",
    },
    title: {
      type: "string",
      default: "",
    },
    content: {
      type: "string",
      default: "",
    },
    titleColor: {
      type: "string",
      default: "#000000",
    },
    contentColor: {
      type: "string",
      default: "#000000",
    },
  },
  edit: function (props) {
    function updateIcon(event) {
      props.setAttributes({ icon: event.target.value });
    }
    function updateTitle(event) {
      props.setAttributes({ title: event.target.value });
    }
    function updateContent(event) {
      props.setAttributes({ content: event.target.value });
    }
    function updateTitleColor(event) {
      props.setAttributes({ titleColor: event.target.value });
    }
    function updateContentColor(event) {
      props.setAttributes({ contentColor: event.target.value });
    }

    return React.createElement(
      "div",
      null,
       React.createElement(
        "div",
        null,
         React.createElement("label", null, "Icon"),
         React.createElement("br", null),
         React.createElement("input", {
          type: "file",
          value: props.attributes.icon,
          onChange: updateIcon,
        })
      ),

       React.createElement(
        "div",
        null,
         React.createElement("label", null, "Title"),
         React.createElement("br", null),
         React.createElement("input", {
          type: "text",
          value: props.attributes.title,
          onChange: updateTitle,
        })
      ),

       React.createElement(
        "div",
        null,
         React.createElement("label", null, "Content"),
         React.createElement("br", null),
         React.createElement("input", {
          type: "text",
          value: props.attributes.content,
          onChange: updateContent,
        })
      ),
       React.createElement(
        "div",
        null,
         React.createElement("label", null, "Title Color"),
         React.createElement("br", null),
         React.createElement("input", {
          type: "text",
          value: props.attributes.titleColor,
          onChange: updateTitleColor,
        })
      ),

       React.createElement(
        "div",
        null,
        " ",
         React.createElement("label", null, "Content Color"),
         React.createElement("br", null),
 React.createElement("input", {
          type: "text",
          value: props.attributes.contentColor,
          onChange: updateContentColor,
        })
      )
    );
  },
  save: function (props) {
    const { icon, title, content, titleColor, contentColor } = props.attributes;
    return React.createElement(
      "div",
      null,

      React.createElement("img", { src: icon }, null),
      React.createElement("h3", { style: { color: titleColor } }, title),
      React.createElement("h3", { style: { color: contentColor } }, content)
    );
  },
});
