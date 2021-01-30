import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext): void {

    const sel: vscode.DocumentSelector = { scheme: 'file', language: 'freakc' };

    const provider1 = vscode.languages.registerCompletionItemProvider(sel, {

        provideCompletionItems(document: vscode.TextDocument,position: vscode.Position,token: vscode.CancellationToken,context: vscode.CompletionContext): vscode.CompletionItem[] {
            return [
                new vscode.CompletionItem('Swear'),
                new vscode.CompletionItem('SwearLine'),
                new vscode.CompletionItem('DoIfTap'),
                new vscode.CompletionItem('DoIfNotTap'),
                new vscode.CompletionItem('DoIfFalse'),
                new vscode.CompletionItem('DoIfDefined'),
                new vscode.CompletionItem('DoIfNotDefined'),
                new vscode.CompletionItem('DoIfNotExist'),
                new vscode.CompletionItem('DoIfExist'),
                new vscode.CompletionItem('DoIf'),
                new vscode.CompletionItem('OrNot'),
                new vscode.CompletionItem('EQU'),
                new vscode.CompletionItem('LEQ'),
                new vscode.CompletionItem('LSS'),
                new vscode.CompletionItem('GEQ'),
                new vscode.CompletionItem('GTR'),
                new vscode.CompletionItem('NEQ'),
                new vscode.CompletionItem('TryMeHoe'),
                new vscode.CompletionItem('TryMeBtch'),
                new vscode.CompletionItem('SquareMyBois'),
                new vscode.CompletionItem('CubeMyBois'),
                new vscode.CompletionItem('WhileSuck'),
                new vscode.CompletionItem('EndSuck'),
                new vscode.CompletionItem('OddOrEven'),
                new vscode.CompletionItem('RepeatSuck'),
                new vscode.CompletionItem('UntilStale'),
                new vscode.CompletionItem('FuckUp'),
                new vscode.CompletionItem('FuckUpLess'),
                new vscode.CompletionItem('PoopInt'),
                new vscode.CompletionItem('PoopString'),
                new vscode.CompletionItem('PoopInput'),
                new vscode.CompletionItem('PoopFnc'),
                new vscode.CompletionItem('EatFnc'),
                new vscode.CompletionItem('GrabFnc'),
                new vscode.CompletionItem('LickFnc'),
                new vscode.CompletionItem('Shit'),
                new vscode.CompletionItem('Puke'),
                new vscode.CompletionItem('Cum'),
                new vscode.CompletionItem('Piss'),
                new vscode.CompletionItem('DisableCoolStuff'),
                new vscode.CompletionItem('EnableCoolStuff'),
                new vscode.CompletionItem('CloseHouse'),
                new vscode.CompletionItem('OpenHouse'),
                new vscode.CompletionItem('Cancer'),
                new vscode.CompletionItem('DumbCousin'),
                new vscode.CompletionItem('TapSomeSht'),
                new vscode.CompletionItem('Forget'),
                new vscode.CompletionItem('ChangeSize'),
                new vscode.CompletionItem('ChangeColor'),
                new vscode.CompletionItem('ChangeName'),
                new vscode.CompletionItem('InsertShits'),
                new vscode.CompletionItem('Patrick'),
                new vscode.CompletionItem('Dani'),
                new vscode.CompletionItem('Thicc'),
                new vscode.CompletionItem('SpongeBob'),
                new vscode.CompletionItem('HiM8'),
                new vscode.CompletionItem('AreYaWinningSon'),
                new vscode.CompletionItem('ILoveYou'),
                new vscode.CompletionItem('GrabMeADrink'),
                new vscode.CompletionItem('HelloWorld'),
                new vscode.CompletionItem('HackMyIP'),
                new vscode.CompletionItem('HackTheNet'),
                new vscode.CompletionItem('MyDirtyInfo'),
                new vscode.CompletionItem('ScanDir'),
                new vscode.CompletionItem('ScanDiaries'),
                new vscode.CompletionItem('ScanLetters'),
                new vscode.CompletionItem('ScanOrgans'),
                new vscode.CompletionItem('LoopStuffs'),
                new vscode.CompletionItem('WaitForBus'),
                new vscode.CompletionItem('MyMemory'),
                new vscode.CompletionItem('BuyClock'),
                new vscode.CompletionItem('BuyCalender'),
                new vscode.CompletionItem('SeeTime'),
                new vscode.CompletionItem('SeeDate'),
                new vscode.CompletionItem('RestartSystem'),
                new vscode.CompletionItem('ShutdownSystem'),
                new vscode.CompletionItem('Loop'),
                new vscode.CompletionItem('Die'),
                new vscode.CompletionItem('PlayFile'),
                new vscode.CompletionItem('CopyFile'),
                new vscode.CompletionItem('MoveFile'),
                new vscode.CompletionItem('FindTrash'),
                new vscode.CompletionItem('FindShit'),
                new vscode.CompletionItem('RenameFile'),
                new vscode.CompletionItem('StealDiaries'),
                new vscode.CompletionItem('TrashDir'),
                new vscode.CompletionItem('Trash'),
                new vscode.CompletionItem('EatDir'),
                new vscode.CompletionItem('PukeDir'),
                new vscode.CompletionItem('EatDrive'),
                new vscode.CompletionItem('Java'),
                new vscode.CompletionItem('JSON'),
                new vscode.CompletionItem('CoolHackerMan'),
            ];
        }
    });

    const provider2 = vscode.languages.registerCompletionItemProvider(
        sel,
        {
            provideCompletionItems() {
                return [
                    new vscode.CompletionItem('fnc'),
                    new vscode.CompletionItem('meme'),
                    new vscode.CompletionItem('typ'),
                    new vscode.CompletionItem('cmt'),
                    new vscode.CompletionItem('ecmt'),
                    new vscode.CompletionItem('str'),
                ];
            }
        },
        '['
    );

    context.subscriptions.push(provider1, provider2);
}

