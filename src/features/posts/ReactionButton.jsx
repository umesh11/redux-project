import { useDispatch } from "react-redux";
import { reactionAdded } from "./postSlice";

const reactionEmoji = {
  thumbsUp: "👍🏼",
  wow: "😮",
  heart: "💖",
  rocket: "🚀",
  coffee: "☕️",
};

const ReactionButton = ({ post }) => {
  const dispatch = useDispatch();

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <>
        <button
          type="button"
          className="reactionButton"
          onClick={() => {
            dispatch(reactionAdded({ postId: post.id, reaction: name }));
          }}
          key={name}
        >
          {emoji} {post.reactions[name]}
        </button>
      </>
    );
  });
  return <div>{reactionButtons}</div>;
};

export default ReactionButton;
