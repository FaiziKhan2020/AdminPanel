import React from "react";

const WidgetUserWelcome = () => {
	return (
		<div className="ps-block--user-wellcome">
			<div className="ps-block__left">
				<img src="/img/user/admin.jpg" width={50} alt="profile photo" />
			</div>
			<div className="ps-block__right">
				<p>
					Hello,<a href="#">Dawood Store</a>
				</p>
			</div>
			<div className="ps-block__action">
				<a href="#">
					<i className="icon-exit"></i>
				</a>
			</div>
		</div>
	);
};

export default WidgetUserWelcome;
