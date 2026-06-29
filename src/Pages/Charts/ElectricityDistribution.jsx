import React, { useState } from "react";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
} from "recharts";
import getGlobalParmas from "../../utils/getGlobalParmas";
import { useQuery } from "@tanstack/react-query";
import { getEnergyGraphApi } from "../../apis/DashboardApis/ChartApis";
import getCardParmas from "../../utils/getCardParmas";
import getEffectiveFilterParmas from "../../utils/getEffectiveFilterParmas";
const ElectricityDistribution = ({ globalFilter, cardFilter }) => {
  const parmas = getEffectiveFilterParmas(globalFilter, cardFilter);
  parmas.mode = "separate";
  const { data, isPending } = useQuery({
    queryKey: ["ElectricityDistribution", parmas],
    queryFn: () => getEnergyGraphApi(parmas),
  });

  const chartData = data?.data?.data;
  console.log(parmas, "ss");
  if (isPending) return <div>....loading</div>;
  return (
    <div className="border border-2 border-primary">
      <ComposedChart
        data={chartData}
        margin={{
          top: 20,
          right: 0,
          bottom: 80,
          left: 0,
        }}
        style={{
          width: "100%",

          aspectRatio: 1.618,
        }}
        responsive
      >
        <XAxis
          dataKey="xAxisLabel"
          width="auto"
          interval={0}
          angle={30}
          scale="band"
          tickMargin={30}
        />
        <YAxis
          width="auto"
          yAxisId="left"
          orientation="left"
          label={{
            value: "Total Grid Consumption (MWh)",
            angle: 90,
          }}
        />
        <YAxis
          width="auto"
          yAxisId="right"
          orientation="right"
          label={{
            value: "Total Covered PV Consumption (kWh)",
            angle: 90,
          }}
        />

        <Line dataKey="totalPvMwh" type="monotone" yAxisId="right" />
        <Bar
          dataKey="totalEnergyMwh"
          barSize={20}
          fill="#413ea0"
          yAxisId="left"
        />
        <Tooltip />
        <legend />
      </ComposedChart>
    </div>
  );
};

export default ElectricityDistribution;
