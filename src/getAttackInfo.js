export function getAttackInfo(obj) {
    const result = [];
    const { special } = obj;
    special.forEach(element => {
        const { id, name, icon, description = "Описание недоступно" } = element;
        result.push({
            id: id,
            name: name,
            icon: icon,
            description: description
        })
    });
    return result;
}