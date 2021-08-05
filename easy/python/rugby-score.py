score = int(input())

maxAmountTries = int(score / 5) + 1;

for tries in range(maxAmountTries):
    if tries * 5 == score:
        print(f'{tries} 0 0')
        continue

    for transformationKick in range(tries + 1):

        if tries * 5 + transformationKick * 2 > score:
            break

        maxPenalties = score - tries * 5 - transformationKick * 2

        if maxPenalties % 3 == 0:
            penalty = int(maxPenalties / 3)
            print(f'{tries} {transformationKick} {penalty}')