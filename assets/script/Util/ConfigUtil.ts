/*
 * @Author: Jiangtao
 * @Date: 2019-11-20 11:58:39
 * @LastEditors: Jiangtao
 * @LastEditTime: 2020-03-20 14:04:58
 */

import ConfigItemContainer from "../ConfigContainer/ConfigItemContainer"
import ConfigPlayerLevelContainer from "../ConfigContainer/ConfigPlayerLevelContainer"
import ConfigSignContainer from "../ConfigContainer/ConfigSignContainer"
import ConfigPrayerContainer from "../ConfigContainer/ConfigPrayerContainer"
import ConfigForgeContainer from "../ConfigContainer/ConfigForgeContainer";
import ConfigAlchemyMasterContainer from "../ConfigContainer/ConfigAlchemyMasterContainer";
import ConfigAlchemyContainer from "../ConfigContainer/ConfigAlchemyContainer";
import ConfigbodyContainer from "../ConfigContainer/ConfigbodyContainer";
import ConfigPetContainer from "../ConfigContainer/ConfigPetContainer";
import ConfigHomeContainer from "../ConfigContainer/ConfigHomeContainer";
import ConfigbookContainer from "../ConfigContainer/ConfigbookContainer";
import ConfigTaskContainer from "../ConfigContainer/ConfigTaskContainer";
import ConfigQAContainer from "../ConfigContainer/ConfigQAContainer";
import ConfigLanContainer from "../ConfigContainer/ConfigLanContainer";
import ConfigComposeContainer from "../ConfigContainer/ConfigComposeContainer";
import ConfigActivityContainer from "../ConfigContainer/ConfigActivityContainer";
import ConfigPetFloorContainer from "../ConfigContainer/ConfigPetFloorContainer";
import ConfigBuffContainer from "../ConfigContainer/ConfigBuffContainer";
import ConfigLoadContainer from "../ConfigContainer/ConfigLoadContainer";
import ConfigMarryContainer from "../ConfigContainer/ConfigMarryContainer";
import ConfigWeddingContainer from "../ConfigContainer/ConfigWeddingContainer";
import ConfigTiancaiContainer from "../ConfigContainer/ConfigTiancaiContainer";
import ConfigSeedsContainer from "../ConfigContainer/ConfigSeedsContainer";
import ConfigXianJinContainer from "../ConfigContainer/ConfigXianJinContainer";
import { config } from "../Const/config";
import ConfigLianDanContainer from "../ConfigContainer/ConfigLianDanContainer";
import ConfigGuideContainer from "../ConfigContainer/ConfigGuideContainer";
import ConfigShareContainer from "../ConfigContainer/ConfigShareContainer";


export default class ConfigUtil {

    public configItem: ConfigItemContainer;
    public configPlayerLevel: ConfigPlayerLevelContainer;
    public ConfigSignContainer: ConfigSignContainer;
    public ConfigPrayerContainer: ConfigPrayerContainer;
    public ConfigForgeContainer: ConfigForgeContainer;
    public ConfigAlchemyMasterContainer: ConfigAlchemyMasterContainer;
    public ConfigAlchemyContainer: ConfigAlchemyContainer;
    public ConfigbodyContainer: ConfigbodyContainer;
    public ConfigPetContainer: ConfigPetContainer;
    public ConfigHomeContainer: ConfigHomeContainer;
    public ConfigbookContainer: ConfigbookContainer;
    public ConfigTaskContainer: ConfigTaskContainer;
    public ConfigQAContainer: ConfigQAContainer;
    public ConfigLanContainer: ConfigLanContainer;
    public ConfigComposeContainer: ConfigComposeContainer;
    public ConfigActivityContainer: ConfigActivityContainer;
    public ConfigPetFloorContainer: ConfigPetFloorContainer;
    public ConfigBuffContainer: ConfigBuffContainer;
    public ConfigLoadContainer: ConfigLoadContainer;
    public ConfigMarryContainer: ConfigMarryContainer;
    public ConfigWeddingContainer: ConfigWeddingContainer;
    public ConfigTiancaiContainer: ConfigTiancaiContainer;
    public ConfigSeedsContainer: ConfigSeedsContainer;
    public ConfigXianJinContainer: ConfigXianJinContainer;
    public ConfigLianDanContainer: ConfigLianDanContainer;
    public ConfigGuideContainer: ConfigGuideContainer;
    public ConfigShareContainer: ConfigShareContainer;

    private static _inst: ConfigUtil;
    public static get inst() {
        if (!ConfigUtil._inst) {
            ConfigUtil._inst = new ConfigUtil()
        }
        return ConfigUtil._inst;
    }

    public addConfig(key: string, value: any) {
        switch (key) {
            case config.configitem:
                ConfigUtil.inst.configItem = new ConfigItemContainer(value);
                break;
            case config.configplayerlevel:
                ConfigUtil.inst.configPlayerLevel = new ConfigPlayerLevelContainer(value);
                break;
            case config.configsign:
                ConfigUtil.inst.ConfigSignContainer = new ConfigSignContainer(value);
                break;
            case config.configprayer:
                ConfigUtil.inst.ConfigPrayerContainer = new ConfigPrayerContainer(value);
                break;
            case config.configforge:
                ConfigUtil.inst.ConfigForgeContainer = new ConfigForgeContainer(value);
                break;
            case config.configalchemymaster:
                ConfigUtil.inst.ConfigAlchemyMasterContainer = new ConfigAlchemyMasterContainer(value);
                break;
            case config.configalchemy:
                ConfigUtil.inst.ConfigAlchemyContainer = new ConfigAlchemyContainer(value);
                break;
            case config.configbody:
                ConfigUtil.inst.ConfigbodyContainer = new ConfigbodyContainer(value);
                break;
            case config.configpet:
                ConfigUtil.inst.ConfigPetContainer = new ConfigPetContainer(value);
                break;
            case config.confighome:
                ConfigUtil.inst.ConfigHomeContainer = new ConfigHomeContainer(value);
                break;
            case config.configbook:
                ConfigUtil.inst.ConfigbookContainer = new ConfigbookContainer(value);
                break;
            case config.configtask:
                ConfigUtil.inst.ConfigTaskContainer = new ConfigTaskContainer(value);
                break;
            case config.configqa:
                ConfigUtil.inst.ConfigQAContainer = new ConfigQAContainer(value);
                break;
            case config.configlan:
                ConfigUtil.inst.ConfigLanContainer = new ConfigLanContainer(value);
                break;
            case config.configcompose:
                ConfigUtil.inst.ConfigComposeContainer = new ConfigComposeContainer(value);
                break;
            case config.configactivity:
                ConfigUtil.inst.ConfigActivityContainer = new ConfigActivityContainer(value);
                break;
            case config.configpetfloor:
                ConfigUtil.inst.ConfigPetFloorContainer = new ConfigPetFloorContainer(value);
                break;
            case config.configbuff:
                ConfigUtil.inst.ConfigBuffContainer = new ConfigBuffContainer(value);
                break;
            case config.configload:
                ConfigUtil.inst.ConfigLoadContainer = new ConfigLoadContainer(value);
                break;
            case config.configmarry:
                ConfigUtil.inst.ConfigMarryContainer = new ConfigMarryContainer(value);
                break;
            case config.configwedding:
                ConfigUtil.inst.ConfigWeddingContainer = new ConfigWeddingContainer(value);
                break;

            case config.configtiancai:
                ConfigUtil.inst.ConfigTiancaiContainer = new ConfigTiancaiContainer(value);
                break;

            case config.configseeds:
                ConfigUtil.inst.ConfigSeedsContainer = new ConfigSeedsContainer(value);
                break;

            case config.configxianjin:
                ConfigUtil.inst.ConfigXianJinContainer = new ConfigXianJinContainer(value);
                break;
            case config.configliandan:
                ConfigUtil.inst.ConfigLianDanContainer = new ConfigLianDanContainer(value);
                break;
            case config.configguide:
                ConfigUtil.inst.ConfigGuideContainer = new ConfigGuideContainer(value);
                break;
            case config.configshare:
                ConfigUtil.inst.ConfigShareContainer = new ConfigShareContainer(value);
                break;

        }
    }


}