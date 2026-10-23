---
title: Daten übersetzen statt kopieren
kategorie: CRM-Migration
teaser: "Beim Wechsel des CRM werden deine Daten nicht einfach kopiert, sondern übersetzt. Vorab wird geklärt, welche Information wo ihre Entsprechung findet und was zurückbleiben kann. So landet im neuen System möglichst wenig Datenmüll."
reihenfolge: 5
platzhalter: false
landingpage: true
draft: false
headline: CRMs sprechen nicht dieselbe Sprache
untertitel: Wie ein B2B-Software-Anbieter zwei Vertriebsteams in einem CRM zusammengeführt hat, mit einer CRM-Migration zu HubSpot.
date: 2026-10-23
seoTitel: CRM-Migration zu HubSpot – übersetzen statt kopieren
beschreibung: Wie ein B2B-Software-Anbieter per CRM-Migration zu HubSpot zwei CRMs zusammenführte und warum Daten dabei übersetzt statt kopiert werden.
coverBild: /images/case-crm-migration-hubspot.svg
coverAlt: Strichzeichnung mehrerer Hände, die gemeinsam Puzzleteile zu einem Bild zusammensetzen
zusammenfassung: "Beide Vertriebsteams arbeiteten in einem gemeinsamen CRM. Jede Information aus CentralStation hatte ihre Entsprechung in HubSpot gefunden. Die Phasen waren den Lifecycle-Phasen zugeordnet, die Tags als Beziehungen zwischen Kontakten und Unternehmen abgebildet. Dubletten und Felder ohne Mehrwert blieben im alten System. Ganz ohne Nacharbeit lief es nicht, aber am Ende passte alles. Eine Sprache für den ganzen Vertrieb."
kennzahlen:
  - wert: "~20.000"
    text: Kontakte und ~15.000 Unternehmen in einem CRM
  - wert: "~2 Wochen"
    text: von der Bestandsaufnahme bis zum gemeinsamen CRM
ctaTitel: 'Steht ein <span class="hl">CRM-Wechsel</span> an?'
ctaText: Im Erstgespräch schauen wir, welche Sprache dein CRM heute spricht und was davon mit umziehen sollte. Unverbindlich, in 30 Minuten.
---

## Beide CRMs funktionierten. Zusammen passten sie nicht.

Wer schon einmal einen Text Wort für Wort übersetzt hat, kennt das Ergebnis. Jedes Wort stimmt, und trotzdem ergibt der Satz keinen Sinn. Eine Entsprechung gibt es fast immer, nur selten eine eins zu eins. Nicht ohne Grund tragen viele Filme im Deutschen einen ganz anderen Titel als im Original.

Mit CRMs ist es ähnlich. Erlebt habe ich das, als ein B2B-SaaS-Unternehmen ein anderes übernahm und die beiden Vertriebsteams zusammengeführt wurden. Das eine arbeitete mit HubSpot, das andere mit CentralStation. Beide Systeme waren über Jahre gewachsen, mit eigenen Pipelines und eigenen Informationen, die an Kontakten, Unternehmen und Deals hängen. Und beide Teams hatten ihre Arbeitsweise längst an ihr System angepasst.

Dabei unterschieden sich die Sprachen stärker als gedacht. Beide Systeme ordneten Kontakte in Phasen ein, aber nicht in dieselben. HubSpot nutzt Lifecycle-Phasen, also Stufen vom ersten Interesse bis zum Kunden. Für jede Phase aus CentralStation musste die passende Entsprechung gefunden werden. Noch weiter auseinander lagen die Tags. In CentralStation ließen sich Kontakte und Unternehmen mit frei wählbaren Etiketten markieren, etwa als Partner, Tochterunternehmen oder ehemaliger Mitarbeiter. HubSpot bildet so etwas über Beziehungen zwischen Kontakten und Unternehmen ab, eine ganz andere Funktion mit eigener Logik. Und manche Kontakte standen in beiden Systemen, dasselbe Wort also doppelt im Wörterbuch.

Vielleicht kennst du das. Auf dem Papier ist es nur ein Umzug von A nach B. In der Praxis ist es eine Übersetzung.

## Eine Sprache für beide Teams

Das Ziel war ein gemeinsames CRM, in dem beide Teams arbeiten, ohne dass unterwegs etwas Wichtiges verloren geht. Und das mit möglichst wenig Datenmüll, denn alles, was ungeprüft mitkommt, muss später jemand pflegen oder aufräumen.

Dafür muss jede Information aus dem alten System ihre Entsprechung im neuen finden. Das ist der Kern jeder CRM-Migration, auch der zu HubSpot. Der Import selbst ist meist der einfachere Teil. Die eigentliche Arbeit liegt im Übersetzen davor.

## So lief die CRM-Migration zu HubSpot

### Erst das Wörterbuch, dann der Import

Am Anfang stand eine Bestandsaufnahme von CentralStation. Welche Informationen werden erhoben, wie vollständig sind sie, und wer im Team braucht sie wofür? Daraus entstand eine Art Wörterbuch. Für jedes Feld wurde entschieden, ob es bleibt, durch ein bestehendes Feld in HubSpot ersetzt wird oder wegfällt.

Kontaktdaten und Unternehmensangaben ließen sich direkt zuordnen. Bei den Phasen brauchte es mehr Fingerspitzengefühl, denn welche Phase aus CentralStation entspricht welcher Lifecycle-Phase in HubSpot? Manches war schlicht Rauschen. Felder, die irgendwann angelegt und kaum genutzt wurden, und Dubletten, also doppelte Einträge, blieben im alten System. Knifflig wurde es bei Nachrichten, E-Mail-Verläufen und Aktivitäten. HubSpot kennt Aktivitätsarten, die es in CentralStation so nicht gab, und für jede musste geklärt werden, ob und wie sie mitkommt.

Der Import selbst lief klassisch über Tabellen. CentralStation war deutlich älter als HubSpot, das war der pragmatischste Weg.

### Manche Wörter brauchen eine freie Übersetzung

Vor dem großen Import liefen Testimporte mit kleinen Datenmengen. Sie zeigten, dass Kontakte, Unternehmen und Felder ankamen. Ob auch jede Bedeutung ankam, prüften sie nicht. Genau das rächte sich bei den Tags.

Nach dem großen Import fehlten sie. Der Kontakt, der in CentralStation als ehemaliger Mitarbeiter markiert war, stand in HubSpot plötzlich als ganz normaler Kontakt da. Nachträglich ließ sich das nicht mehr zuordnen. Also hieß es Import löschen, Übersetzung finden, neu importieren. Rückblickend hätte ich genau hier vorher länger hinschauen müssen.

Die Übersetzung lag in den Beziehungen von HubSpot. Der ehemalige Mitarbeiter wurde mit seinem früheren Arbeitgeber verknüpft, und zwar als ehemaliger Mitarbeiter. Ein Tochterunternehmen hing nun an seinem Mutterunternehmen. Kein Etikett mehr, sondern eine Verbindung. Eine freie Übersetzung, die dasselbe meint, nur in der Sprache von HubSpot.

### Doppelte Wörter fallen erst auf, wenn es zu spät ist

Ein zweiter Stolperstein waren die Dubletten zwischen beiden Systemen. HubSpot überschreibt beim Import Kontakte mit derselben E-Mail-Adresse. Danach ließ sich nicht mehr erkennen, ob ein Kontakt schon vorher in HubSpot lag oder aus CentralStation kam. Auch das hätte ins Wörterbuch gehört, nämlich welche Version im Zweifel gewinnt.

### Eine neue Sprache lernt man im Alltag

Parallel wechselte das Team aus CentralStation ins neue System. Die Fragen waren sehr praktisch. Wie mache ich in HubSpot das, was ich bisher in CentralStation gemacht habe? Diese Fragen direkt im Alltag zu beantworten, gehörte genauso zur Migration wie der Import selbst.

## Was am Ende stand und was ich daraus mitnehme

Am Ende sprach der ganze Vertrieb eine Sprache. Der Weg dorthin war holpriger als nötig, und genau daraus stammen die drei Dinge, die ich heute anders mache.

1. **Erst übersetzen, dann importieren.** Jede Information braucht vor dem Import ihre Entsprechung. Ein Testimport sollte nicht nur zeigen, ob Daten ankommen, sondern ob ihre Bedeutung ankommt. Testen, prüfen, anpassen, ruhig mehrmals. Heute hilft dabei auch KI, die die Felder beider Systeme abgleicht und auf Konflikte hinweist. Welche Übersetzung passt, [entscheidest trotzdem du](/notizbuch/der-erste-gedanke-gehoert-dir/).
2. **Nicht jedes Wort muss mit.** Eine Migration ist die beste Gelegenheit zum Aufräumen. Was niemand braucht, pflegt im neuen System auch niemand. Ganz ohne Datenmüll geht es nie, aber jede Information, die bewusst zurückbleibt, stört später nicht mehr.
3. **Mit dem eigenen Wörterbuch anfangen.** Exportier dein CRM einmal als Tabelle und markiere jede Spalte mit „brauchen wir“, „kann weg“ oder „unklar“. Das ist der erste Entwurf deines Wörterbuchs und oft schon ein Schritt zu einem aufgeräumteren CRM, ganz ohne Umzug.
