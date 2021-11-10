import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

function Option(props) {
  const {
    paragraphs,
    includeHtml,
    setIncludeHtml,
    inputValue,
    setInputValue,
    tag,
    setTag,
  } = props;
  return (
    <div className="options">
      <div className="wrapper">
        <div className="optionsContainer">
          <div className="paragraphs">
            <p>Paragraphs: </p>
            <input
              type="number"
              min="1"
              max="10"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
          <div className="tags">
            <p>Tags: </p>
            <select defaultValue={tag} onChange={(e) => setTag(e.target.value)}>
              <option value="p">p</option>
              <option value="h1">h1</option>
              <option value="h2">h2</option>
              <option value="h3">h3</option>
              <option value="h4">h4</option>
              <option value="h5">h5</option>
              <option value="h6">h6</option>
              <option value="span">span</option>
            </select>
          </div>
          <div className="include">
            <p>Include HTML: </p>
            <select
              defaultValue={includeHtml}
              onChange={(e) => setIncludeHtml(e.target.value)}
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>
        <div className="copy">
          <CopyToClipboard
            text={paragraphs.map((sentence) =>
              includeHtml === "Yes" ? `<${tag}>${sentence}<${tag}/>` : sentence
            )}
          >
            <button>Copy to clipboard</button>
          </CopyToClipboard>
        </div>
      </div>
    </div>
  );
}

export default Option;
