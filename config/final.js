import Config from "react-native-config"
import { therma_colors } from "./therma";
import { british_colors } from "./british";
const environment = Config.ENV
const env = environment === 'qa'
export const mainColor = env ? therma_colors : british_colors 