import * as proto from "../../Net/proto/proto"
import PlayerHead from "../Head/PlayerHead";
import TimeUtil from "../../Util/TimeUtil";

export default class TileWedding extends fgui.GComponent {
    public bg:fgui.GImage;
	public n23:fgui.GImage;
	public head1:fgui.GComponent;
	public player1name:fgui.GTextField;
	public head2:fgui.GComponent;
	public player2name:fgui.GTextField;
	public num:fgui.GTextField;
	public time_end:fgui.GTextField;
	public n26:fgui.GTextField;
	public btn_join:fgui.GButton;
    public _interval:any;
    
    private time:number;
	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.bg = <fgui.GImage>(this.getChildAt(0));
		this.n23 = <fgui.GImage>(this.getChildAt(1));
		this.head1 = <fgui.GComponent>(this.getChildAt(2));
		this.player1name = <fgui.GTextField>(this.getChildAt(3));
		this.head2 = <fgui.GComponent>(this.getChildAt(4));
		this.player2name = <fgui.GTextField>(this.getChildAt(5));
		this.num = <fgui.GTextField>(this.getChildAt(6));
		this.time_end = <fgui.GTextField>(this.getChildAt(7));
		this.n26 = <fgui.GTextField>(this.getChildAt(8));
        this.btn_join = <fgui.GButton>(this.getChildAt(9));
        this._interval = setInterval(this.updateTime.bind(this), 1000);
    }
    
    public setWeddingInfo(data:proto.WeddingInfo){
        this.player1name.text = data.player1.name;
        this.player2name.text = data.player2.name;
        this.num.text = "婚宴人数:"+data.playernum+"/10";
        let head1:PlayerHead = <PlayerHead>this.head1;
        head1.setHead(data.player1.head);

        let head2:PlayerHead = <PlayerHead>this.head2;
        head2.setHead(data.player2.head);
        this.time = data.endtime;
    }

    private updateTime() {
        if(this.visible == true && this.time>0){
            this.time_end.text = "剩余时间:"+ TimeUtil.remainDateTime(this.time,"",true);
        }
    }

}