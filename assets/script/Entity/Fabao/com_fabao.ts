/*
 * @Author: Jiangtao
 * @Date: 2020-02-18 08:54:56
 * @LastEditors: Jiangtao
 * @LastEditTime: 2020-03-20 14:56:17
 */
import LoadUtil from "../../Util/LoadUtil";

export default class com_fabao extends fgui.GComponent {
	public fa_bao_icon: fgui.GLoader;
	public holder: fgui.GGraph;

	private cacheDb: dragonBones.ArmatureDisplay;
	private cacheName: string;
	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.fa_bao_icon = <fgui.GLoader>(this.getChildAt(0));
		this.holder = <fgui.GGraph>(this.getChildAt(1));
	}

	public setIconPackage(package_name: string, res_name: string, posconfig: string = null) {
		if (package_name && res_name) {
			if (LoadUtil.inst.getByName(package_name)) {
				if (LoadUtil.inst.getItemURL(package_name, res_name)) {
					this.fa_bao_icon.url = LoadUtil.inst.getItemURL(package_name, res_name);
				} else {
					this.fa_bao_icon.url = LoadUtil.inst.createObject(package_name, res_name).resourceURL;
				}
			} else {
				LoadUtil.inst.LoadPackage(package_name, (err) => {
					if (!err) {
						this.fa_bao_icon.url = LoadUtil.inst.createObject(package_name, res_name).resourceURL;
					}
				});
			}

		} else if (package_name == "" && res_name) {

			if (this.cacheName != "" && this.cacheName != res_name) {
				let armature: dragonBones.ArmatureDisplay = this.holder.node.getComponent("dragonBones.ArmatureDisplay");
				if (armature) {
					armature.armature().node.removeFromParent();
				}
				this.holder.node.removeAllChildren();
			}

			if (this.cacheName == "" || this.cacheName != res_name) {
				LoadUtil.inst.LoadDragonBones(res_name, (prefab) => {
					this.cacheName = res_name;
					var node = cc.instantiate(prefab);
					node.setParent(this.holder.node);
					node.setPosition(cc.Vec2.ZERO)
					node.active = true;

					if (posconfig) {
						let pos = posconfig.split(",")
						if (pos.length > 2) {
							this.holder.x = Number.parseInt(pos[0])
							this.holder.y = Number.parseInt(pos[1])
							this.holder.setScale(Number.parseFloat(pos[2]), Number.parseFloat(pos[2]))
						}
					}

				});
			}
		} else if (package_name == null && res_name == null) {
			this.cacheName = "";
			let armature: dragonBones.ArmatureDisplay = this.holder.node.getComponent("dragonBones.ArmatureDisplay");
			if (armature) {
				armature.armature().node.removeFromParent();
			}
			this.holder.node.removeAllChildren();
		}
	}

	public setscale(val: number) {
		this.holder.setScale(val, val)
	}
}