import { world } from "@minecraft/server"

world.afterEvents.entityHealthChanged.subscribe(hcEvent => {
    if (hcEvent.entity.typeId != "minecraft:player") return;
    let player = hcEvent.entity;
    player.nameTag = `${player.name}\nHP:§c${Math.ceil(hcEvent.newValue)}`;
});

world.afterEvents.entityDie.subscribe(edEvent => {
    if (edEvent.deadEntity.typeId != "minecraft:player") return;
    let player = edEvent.deadEntity;
    let component = edEvent.deadEntity.getComponent("minecraft:health");
    player.nameTag = `${player.name}\nHP:§c${component.defaultValue}`;
});