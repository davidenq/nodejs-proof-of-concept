exports.home = async (req, res) => {
  await res.json({ status: "ok", code: 200, data: "Hi World!" });
};
