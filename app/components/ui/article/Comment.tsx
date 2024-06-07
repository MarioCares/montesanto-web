import { IComment } from "~/interface/comment.interface";

interface BaseCommentProps {
  comment: IComment;
}

export function BaseComment({ comment }: BaseCommentProps) {
  return (
    <article className="media box">
      <figure className="media-left">
        <p className="image is-64x64">
          <img
            alt="avatar"
            src="https://bulma.io/assets/images/placeholders/128x128.png"
          />
        </p>
      </figure>
      <div className="media-content">
        <div className="content">
          <p>
            <strong>{comment.userName}</strong>{" "}
            <small>{comment.postedAt}</small>
            <br />
            {comment.text}
          </p>
        </div>
        <nav className="level is-mobile">
          <div className="level-left">
            <div className="level-item">
              <button className="button is-white">
                <span className="icon">
                  <i className="ti-share-alt"></i>
                </span>
              </button>
            </div>
            <div className="level-item">
              <div className="tags has-addons">
                <span className="tag is-medium">{comment.likes}</span>
                <button className="tag is-medium">
                  <span className="icon is-small">
                    <i className="ti-thumb-up"></i>
                  </span>
                </button>
              </div>
            </div>
            <div className="level-item">
              <div className="tags has-addons">
                <span className="tag is-medium">{comment.dislikes}</span>
                <button className="tag is-medium">
                  <span className="icon is-small">
                    <i className="ti-thumb-down"></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </article>
  );
}

export function LeaveComment() {
  return (
    <article className="media">
      <figure className="media-left">
        <p className="image is-64x64">
          <img
            alt="avatar"
            src="https://bulma.io/assets/images/placeholders/128x128.png"
          />
        </p>
      </figure>
      <div className="media-content">
        <div className="field">
          <p className="control">
            <textarea
              className="textarea"
              placeholder="Add a comment..."
            ></textarea>
          </p>
        </div>
        <nav className="level">
          <div className="level-left">
            <div className="level-item">
              <button className="button is-info">Submit</button>
            </div>
          </div>
          <div className="level-right">
            <div className="level-item">
              <label className="checkbox">
                <input type="checkbox" /> Press enter to submit
              </label>
            </div>
          </div>
        </nav>
      </div>
    </article>
  );
}
