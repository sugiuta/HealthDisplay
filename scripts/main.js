import { world } from "@minecraft/server"

world.events.tick.subscribe(tick => {
    if ((tick.currentTick % 10) != 0) return; // 0.5秒ごとに実行
    let players = world.getAllPlayers(); // 全てのプレイヤーを取得
    for (let player of players) {
        let health = player.getComponent(`minecraft:health`); // EntityHealthComponent
        player.nameTag = `${player.name}\nHP:§c${Math.ceil(health.current)}`; // ネームタグにHPを表示
    }
});