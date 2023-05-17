let stringTable = {};
stringTable["LOGIN_PASSWORD_LABEL"]   = "MOT DE PASSE"
stringTable["LOGIN_USER_LABEL"]     = "IDENTIFIANT"
stringTable["LOGIN_BUTTON_LABEL"]   = "VALIDER"

export function fromStringTable(id: string, defaultValue: string = "") {
    return stringTable[id] || defaultValue;
}