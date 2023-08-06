import React from "react";

interface IProps {
  params: { topicId: string };
}

function TopicUpdateForm(props: IProps) {
  return (
    <div style={{}}>
      <form>
        <div>
          <input type="text" name="topic" placeholder="토픽 타이틀" />
        </div>

        <div>
          <textarea name="content" placeholder="내용" />
        </div>

        <div>
          <input type="submit" value="create" />
        </div>
      </form>
    </div>
  );
}

export default TopicUpdateForm;
