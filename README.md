# [DE-Kursname hier eintragen]

Dies ist das Repository für den **LinkedIn Learning** Kurs `[COURSENAME]`. Den gesamten Kurs finden Sie auf [LinkedIn Learning][lil-course-url].

![COURSENAME][lil-thumbnail-url]

Dieser Kurs ist in GitHub Codespaces integriert, eine sofort verfügbare Cloud-Entwicklungsumgebung, die alle Funktionen Ihrer bevorzugten IDE bietet, ohne dass Sie einen lokalen Rechner einrichten müssen. Mit Codespaces können Sie von jedem Rechner aus und zu jeder Zeit praktische Übungen durchführen - und dabei ein Tool verwenden, das Ihnen häufig in der Praxis begegnen wird.
Jede Folge der Code-Challenges-Serie bietet mindestens 12 praktische Übungen in verschiedenen Schwierigkeitsgraden, so dass Sie sich selbst herausfordern und das Gelernte festigen können. Schauen Sie sich das Video " Wie verwende ich GitHub Codespaces mit diesem Kurs?" an, um zu erfahren, wie man einen Codespace einrichtet und zum Einsatz bringt.

[COURSEDESCRIPTION]

## Anleitung

Dieses Repository hat Branches für jedes Video im Kurs. Verwenden Sie das Ausklappmenü "Branch: ..." in GitHub um zwischen den unterschiedlichen Branches hin und her zu wechseln bzw. um bei einem spezifischen Status einzusteigen. Oder Sie fügen `/tree/zBRANCH_NAME` der URL hinzu um direkt in den gewünschten Branch zu wechseln.

## Branches

Die Git Branches sind passend zu den Videos im Kurs strukturiert. Die Namenskonvention lautet `Kapitel#_Video#`. Der Branch `02_03` beinhaltet zum Beispiel die Übungen für das dritte Video im zweiten Kapitel.
Einige Branches haben einen Anfangsstatus (`b`) für "beginning" und einen Endstatus (`e`). Der Branch mit dem `e` am Ende beinhaltet in diesem Fall stets den Code der am Ende des Videos zu sehen ist. Der `master` Branch beinhaltet den initialen Quellcode und wird nicht für die Übungen innerhalb des Kurses genutzt.

Wenn Sie von einem Branch nach Änderungen zum nächsten Branch wechseln, erhalten Sie möglicherweise die folgende Meldung:

```
error: Your local changes to the following files would be overwritten by checkout:        [files]
Please commit your changes or stash them before you switch branches.
Aborting
```

Dieses Problem lösen Sie wie folgt:
Add changes to git using this command: git add .
Commit changes using this command: git commit -m "some message"

## Installation

1. Um diese Übungsdateien nutzen zu können, müssen Sie folgendes installiert haben:
   - [list of requirements for course]
2. Klonen Sie das Repository in Ihre lokale Maschine unter Verwendung von terminal (Mac), CMD (Windows) oder ein anderes Werkzeug mit grafischer Bedienoberfläche wie SourceTree.
3. [Course-specific instructions]

### Autor

**[Name hier eintragen]**

_[Berufsbezeichnung hier eintragen]_

Sehen Sie sich andere Kurse des Autors auf [LinkedIn Learning](https://www.linkedin.com/learning/instructors/name_des_autors) an.

[0]: # "Replace these placeholder URLs with actual course URLs"
[lil-course-url]: https://www.linkedin.com
[lil-thumbnail-url]: https:
[1]: # "End of DE-Instruction ###############################################################################################"

---

## LiL-TypeScript-CodeChallenges

- typescript5 notwendig. lokal als `{"typescript.tsdk": "/usr/local/lib/node_modules/typescript/lib" }`
- stellen sie sicher, dass ihr vscode ihre projekt-installation von typescript benutzt (e.g. select typescript version)
- e.g. via workspace settings
- achtung: es gibt nicht immer eine eingebaute typescript lösung für die challenges. manchmal ist etwas handarbeit notwendig. hauptsache das endergebnis ist korrekt.

## !push force squash nicht vergessen!

TypeScript ist exzellent um professionelle, stabile Apps zu bauen.
TypeScripts Möglichkeiten gehen aber deutlich weiter als das was in der breiten Masse bekannt ist.
In diesem Code Challenges Kurs begeben Sie sich auf eine Reise voller spannenden Aufgaben um Ihr TypeScript-Verständnis nochmals aktiv unter Beweis zu stellen, zu erweitern und zu festigen. Sie werden sich teilweise mit lang etablierten und teilweise mit sehr neuen Features auseinandersetzen.

Dabei werden Sie durchaus herausfordernde und kreative Rätsel meistern aber eines ist sicher: Danach sind Sie perfekt vorbereitet auf die Praxis.

Ich empfehle Ihnen vor diesen Challenges den TypeScript Grundkurs zu machen der Ihnen über die Basics hinaus ein Komplettverständnis von TypeScript liefert.

Mein Name ist David Lorenz, ich bin Softwarearchitekt und nehme Sie in diesem Kurs an die Hand um das nächste Level von TypeScript-Wissen zu erreichen.
