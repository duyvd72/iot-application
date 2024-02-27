import { Button, Flex, Image, Progress, Typography } from "antd";
import { CChart } from "@coreui/react-chartjs";
import { useState } from "react";

function Trap() {
  const [battery] = useState(80);
  return (
    <Flex vertical>
      <Flex>
        <Typography.Title>Trap</Typography.Title>
      </Flex>
      <Flex
        justify="space-between"
        align="flex-start"
        gap={24}
        style={{ width: "90%", margin: "0 auto" }}
      >
        <Flex vertical style={{ width: "70%" }}>
          <Typography.Title level={4}>Environment Data</Typography.Title>
          <Flex justify="space-between" gap={24}>
            {/* Sửa thông số của 4 ô ở phần value của thẻ Statistic bên dưới */}
            <div
              style={{
                borderRadius: "10px",
                padding: "24px",
                width: "25%",
                backgroundImage:
                  "linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1",
              }}
            >
              <Typography.Text style={{ textAlign: "center" }}>
                Temperature 🌡️
              </Typography.Text>
              <Typography.Title level={3} style={{ textAlign: "center" }}>
                25 ℃
              </Typography.Title>
            </div>
            <div
              style={{
                borderRadius: "10px",
                padding: "24px",
                width: "25%",
                backgroundImage: "linear-gradient(135deg, #E1DC9A, #51A1A7)",
              }}
            >
              <Typography.Text style={{ textAlign: "center" }}>
                Humidity 💧
              </Typography.Text>
              <Typography.Title level={3} style={{ textAlign: "center" }}>
                70%
              </Typography.Title>
            </div>
            <div
              style={{
                borderRadius: "10px",
                padding: "24px",
                width: "25%",
                backgroundImage: "linear-gradient(315deg, #7A59B7, #EBEDEB)",
              }}
            >
              <Typography.Text style={{ textAlign: "center" }}>
                Adhesive plates left 🥅
              </Typography.Text>
              <Typography.Title level={3} style={{ textAlign: "center" }}>
                1
              </Typography.Title>
            </div>
            <div
              style={{
                borderRadius: "10px",
                padding: "24px",
                width: "25%",
                backgroundImage: "linear-gradient(315deg, #38D020, #FBD598)",
              }}
            >
              <Typography.Text style={{ textAlign: "center" }}>
                Fruit flies 🪰
              </Typography.Text>
              <Typography.Title level={3} style={{ textAlign: "center" }}>
                70
              </Typography.Title>
            </div>
          </Flex>
          <Typography.Title level={4} style={{ marginTop: "20px" }}>
            Recommendation
          </Typography.Title>
          {/* Sửa Recommendation ở đây */}
          <Typography.Text style={{ color: "#faad14" }}>
            ⚠ High fruit fly quantity. Take care of your garden New adhesive
            plate available!
          </Typography.Text>
        </Flex>
        <Flex style={{ width: "30%" }} justify="center">
          {/* Sửa ảnh thì copy address url của ảnh rồi sửa vào thuộc tính src bên dưới */}
          <Image
            width={300}
            height={300}
            src="https://i0.wp.com/entomologytoday.org/wp-content/uploads/2017/03/stable-fly-trap-up-close.jpg?fit=614%2C819&ssl=1"
            preview={false}
            fallback="data:image/png;base64,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"
          />
        </Flex>
      </Flex>
      <Flex style={{ margin: "20px auto", width: "90%" }} gap={24}>
        <Flex style={{ width: "70%" }} vertical gap={12}>
          {/* Sửa chart ở đây, dễ hiểu có thể tự mò :D */}
          <CChart
            style={{ width: "100%" }}
            type="line"
            data={{
              labels: [
                "7h00",
                "8h00",
                "9h00",
                "10h00",
                "11h00",
                "12h00",
                "13h00",
                "14h00",
                "15h00",
                "16h00",
                "17h00",
                "18h00",
              ],
              datasets: [
                {
                  label: "20/05/2023",
                  backgroundColor: "rgba(220, 220, 220, 0.2)",
                  borderColor: "rgb(0, 213, 255)",
                  pointBackgroundColor: "rgb(0, 213, 255)",
                  pointBorderColor: "#fff",
                  data: [36, 49, 57, 63, 67, 70, 74, 75, 75, 75, 75, 79],
                },
                {
                  label: "21/05/2023",
                  backgroundColor: "rgba(151, 187, 205, 0.2)",
                  borderColor: "red",
                  pointBackgroundColor: "red",
                  pointBorderColor: "#fff",
                  data: [21, 34, 39, 47, 51, 52, 55, 57, 58, 58, 58, 62],
                },
              ],
            }}
            options={{
              plugins: {
                legend: {
                  labels: {
                    color: "",
                  },
                },
              },
              scales: {
                x: {
                  grid: {
                    color: "",
                  },
                  ticks: {
                    color: "",
                  },
                },
                y: {
                  grid: {
                    color: "",
                  },
                  ticks: {
                    color: "",
                  },
                },
              },
            }}
          />
          <Typography.Text italic style={{ textAlign: "center" }}>
            Fruit fly quantity
          </Typography.Text>
        </Flex>
        <Flex justify="flex-end" style={{ width: "30%" }} align="flex-start">
          <Flex vertical>
            <Typography.Title level={4}>Power(%)</Typography.Title>
            <Flex>
              <Progress
                style={{ marginBottom: "20px" }}
                strokeColor={
                  battery > 30 ? "#52c41a" : battery > 15 ? "#faad14" : "red"
                }
                percent={battery}
                size={["100%", 30]}
              />
            </Flex>
            <Typography.Title level={4}>Map</Typography.Title>
            <img
              src="https://thanhnien.mediacdn.vn/Uploaded/trungnq/2022_10_29/1-2829.jpg"
              width={"100%"}
              alt=""
            />
            <Flex gap={24} justify="center" style={{ margin: "20px 0" }}>
              <Button type="primary">Other Traps</Button>
              <Button type="primary">Replace new adhesive plate</Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Trap;
