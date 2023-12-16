# written by Rathin

trace_file = "lsr.tr" # trace file name

start_time = None
end_time = None
load_data = {}

with open(trace_file, "r") as file:
    for line in file:
        parts = line.split()
        node_id = parts[2].split('/')[2]
        time = float(parts[1])
        if parts[0] != '+':
            continue
        if node_id not in load_data:
            load_data[node_id] = 1
        else:
            load_data[node_id] += 1

for node_id in sorted(load_data.keys()):
    Lambda = load_data[node_id]/time
    print(node_id, Lambda)
