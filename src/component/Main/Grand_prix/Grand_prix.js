import "./Grand_prix.css";
import { ReactComponent as Vector } from '../../svg/Vector.svg';
import { ReactComponent as Btn_vote } from "../../svg/btn_vote.svg";


const Grand_prix = () => {
    return (
        <div className="Main-Grand_prix">
            <Vector className="Vector" />
            <div className="box">
                <div className="box_header">
                    <div>date</div>
                    <div>timer</div>
                    <button><Btn_vote className="btn_vote" /></button>
                </div>
                <div className="box_content">
                    <div className="content_inner">sss
                        <img src="" />
                        <button />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Grand_prix