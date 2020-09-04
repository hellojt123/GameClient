import LoadUtil from "../../Util/LoadUtil";

/*
 * @Author: Jiangtao
 * @Date: 2020-02-18 08:54:56
 * @LastEditors: Jiangtao
 * @LastEditTime: 2020-03-24 09:59:29
 */


export default class com_pet extends fgui.GComponent {
	public pet_icon: fgui.GLoader;
	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.pet_icon = <fgui.GLoader>(this.getChildAt(0));
	}

	public setIconPackage(package_name: string, res_name: string, posconfig: string = null) {
		if (package_name && res_name) {
			if (LoadUtil.inst.getByName(package_name)) {
				if (LoadUtil.inst.getItemURL(package_name, res_name)) {
					this.pet_icon.url = LoadUtil.inst.getItemURL(package_name, res_name);
				} else {
					this.pet_icon.url = LoadUtil.inst.createObject(package_name, res_name).resourceURL;
				}
			} else {
				LoadUtil.inst.LoadPackage(package_name, (err) => {
					if (!err) {
						this.pet_icon.url = LoadUtil.inst.createObject(package_name, res_name).resourceURL;
					}
				});
			}
			if (posconfig && posconfig != "") {
				let pos = posconfig.split(",")
				if (pos.length > 2) {
					this.pet_icon.x = Number.parseInt(pos[0])
					this.pet_icon.y = Number.parseInt(pos[1])
					this.pet_icon.setScale(Number.parseFloat(pos[2]), Number.parseFloat(pos[2]))
				}
			}
		}
	}
}