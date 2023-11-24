import { world } from "@minecraft/server"

world.afterEvents.entityHealthChanged.subscribe(hcEvent => {
    if (hcEvent.entity.typeId != "minecraft:player") return;
    let player = hcEvent.entity;
    player.nameTag = `${player.name}\nHP:§c${hcEvent.newValue}`;
});